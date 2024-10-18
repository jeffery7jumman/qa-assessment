from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

# Set up Safari WebDriver
driver = webdriver.Safari()  # No need for additional options for Safari

# Open the browser and navigate to the Photo/Album listing page
driver.get("http://localhost:3000/albums")  # Update with the actual URL of your web app

# Wait for the page to load
time.sleep(3)

# Locate the search box (update this with your input field's selector)
search_box = driver.find_element(By.XPATH, '//input[@placeholder="Search"]')  # Adjust as needed

# Enter the search term into the search box
search_term = "sample album"  # Replace with a relevant search term for your app
search_box.send_keys(search_term)

# Submit the search (if it needs to be submitted explicitly)
search_box.send_keys(Keys.RETURN)

# Wait for the results to load
time.sleep(3)

# Validate that the correct results appear
# Locate the search results (adjust the selector as needed for your result list)
results = driver.find_elements(By.CLASS_NAME, "album-result")  # Adjust to match your app's class for results

# Check if the results contain the search term (basic validation)
if results:
    found = False
    for result in results:
        if search_term.lower() in result.text.lower():
            print(f"Search result '{result.text}' contains the term '{search_term}' - PASS")
            found = True
        else:
            print(f"Search result '{result.text}' does not contain the term '{search_term}' - FAIL")
    
    if not found:
        print(f"No results matching '{search_term}' found.")
else:
    print("No search results found.")

# Close the browser
driver.quit()
