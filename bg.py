from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
import time

def fetch_data_with_selenium(url, times=400, delay=0.1):
    # Set up the WebDriver
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')  # Run in headless mode
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)
    
    for i in range(times):
        try:
            # Load the page
            driver.get(url)
            
            # Wait for the page to load completely
            time.sleep(delay)
            
            # Get the page source or any specific data you need
            page_source = driver.page_source
            print(f"Attempt {i + 1}: Page source length {len(page_source)}")
        except Exception as e:
            print(f"Attempt {i + 1}: Failed to fetch data. Error: {e}")
        time.sleep(delay)
    
    # Quit the WebDriver
    driver.quit()

# Example usage
if __name__ == "__main__":
    url = "https://net24dhendriksen.gc-webhosting.nl/mobile_app/"  # Replace with the desired URL
    fetch_data_with_selenium(url)
