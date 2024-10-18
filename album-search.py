from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time


driver = webdriver.Safari()
print("Safari WebDriver initialized.")


driver.get("http://localhost:3000/login")
print("Navigating to login page...")

# Wait for the next page to load
time.sleep(3)


username_field = driver.find_element(By.XPATH, '//input[@placeholder="Username"]')
password_field = driver.find_element(By.XPATH, '//input[@placeholder="Password"]')


username = "testuser"  # Correct username
password = "password123"  # Correct password
username_field.send_keys(username)
print("Username entered successfully.")
password_field.send_keys(password)
print("Password entered successfully.")

# Locate and click the Join button
join_button = driver.find_element(By.XPATH, '//button[text()="Join"]')
join_button.click()
print("Clicked the Join button.")

# Wait for the next page to load
time.sleep(3)

try:
    success_message = driver.find_element(By.XPATH, '//h1[text()="Welcome to the Home Page"]')
    print("Login successful, user is on the home page.")
except:
    print("Login failed or user is not redirected to the home page.")
    driver.quit()
    exit()

# Navigate to the Album page after login
driver.get("http://localhost:3000/album")
print("Navigating to the Album page...")

# Wait for the page to load
time.sleep(3)

search_term = "sunt qui excepturi placeat culpa"
search_box = driver.find_element(By.XPATH, '//input[@placeholder="Search albums..."]')
search_box.clear()
search_box.send_keys(search_term)
print(f"Search term '{search_term}' entered successfully.")

# Wait for the search results to load/update
time.sleep(2)

# Validate that the correct album appears in the search results
album_titles = driver.find_elements(By.CSS_SELECTOR, 'ul li')
album_found = False
for album in album_titles:
    if search_term.lower() in album.text.lower():
        print(f"Album found: {album.text}")
        album_found = True
        break

if not album_found:
    print(f"Album '{search_term}' not found in the search results.")

# Close the browser
driver.quit()
