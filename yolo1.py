from ultralytics import YOLO
import cv2

# 모델 로드
model = YOLO("yolov8n.pt")

# 동영상 열기
input = "test_video.mp4"
cap = cv2.VideoCapture(input)

# 동영상 저장
fps = cap.get(cv2.CAP_PROP_FPS)
width = 960
height = 540

fourcc = cv2.VideoWriter_fourcc(*"H264") # 코덱 정의
out = cv2.VideoWriter("output.mp4", fourcc, fps, (width, height))

# MOT 결과 파일
mot_save_path = "test_video.txt"
f = open(mot_save_path, "w")

frame_idx = 1

while cap.isOpened():
    # 프레임 받아오기
    retval, frame = cap.read() # read()는 반환값 두 개: 성공/실패 여부, 현재 프레임
    
    if not retval:
        break
    
    results = model.track(
        frame, 
        persist=True, 
        tracker="bytetrack.yaml", 
        classes=[0], 
        verbose=False
    )

    r = results[0]

    # 프레임 출력
    result_frame = r.plot()
    result_frame = cv2.resize(result_frame, (960, 540))

    # MOT 결과 저장
    if r.boxes is not None and r.boxes.id is not None:

        boxes = r.boxes.xywh.cpu().numpy()
        ids = r.boxes.id.cpu().numpy().astype(int)
        confs = r.boxes.conf.cpu().numpy()

        for box, obj_id, conf in zip(boxes, ids, confs):

            x, y, w, h = box

            left = x - w / 2
            top = y - h / 2

            f.write(
                f"{frame_idx},{obj_id},{left:.2f},{top:.2f},{w:.2f},{h:.2f},{conf:.2f},-1,-1,-1\n"
            )

    # 프레임 저장
    out.write(result_frame)

    # 결과 확인
    cv2.imshow("ByteTrack", result_frame)
    if cv2.waitKey(5) == ord('q'):
        break

    frame_idx += 1

cap.release()
out.release()
f.close()
cv2.destroyAllWindows()