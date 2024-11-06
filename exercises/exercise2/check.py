import requests

import time

# Measure start time
start_time = time.time()

results = []

# Load URLs and check each one sequentially
def checkUrl(url):
        
        url = url.strip()
        result = {'url': url, 'status_code': 'FAILED'}  # Default to FAILED
        try:
            response = requests.get(f'http://{url}', timeout=1)
            if response.status_code == 200:
                result['status_code'] = 'OK'
        except requests.exceptions.RequestException:
            result['status_code'] = 'FAILED'
        
 
        end_time = time.time()
        elapsed_time = end_time - start_time
        return result, elapsed_time