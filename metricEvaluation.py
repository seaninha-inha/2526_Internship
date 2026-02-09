import os
import subprocess

path = r'C:\Robotics\TrackEval'
script_path = os.path.join(
    path,
    'scripts',
    'run_mot_challenge.py'
)

command = [
    'python', script_path,
    '--BENCHMARK', 'CustomSet',
    '--SPLIT_TO_EVAL', 'test',
    '--TRACKERS_TO_EVAL', 'ByteTrack',
    '--USE_PARALLEL', 'False'
]

subprocess.run(command, cwd=path)