# Email-Sender-Script
This repository has a complete script which will fetch the records from the Excel sheet and send a formatted email to all the email ids present in the respective sheet.
Sample Template is for sending an email to the multiple recruiters at once on certain delay.

## Getting Started
For setting up the application in local, follow the below steps:
1. Prerequisites
    - Node.js
    - npm or Yarn (Package Manager)

2. Installation
    - Clone the Repository 
    ```bash
    https://github.com/hk-karn/Email-Sender-Script.git
    ```
    - Install the dependencies
    ```bash
    npm install
    ```
3.  Run the Application
    ```bash
    node index.js
     ```
## Tech Stack
- JavaScript
- Node.js
- SMTP

## 📝 Usage
1. Create an Excel workbook with the name `list.xlsx`.
2. Create a folder named `data` and keep the `list.xlsx` file in this folder.
3. Name the sheets and add the required attributes in the sheets based on your requirement.
4. Customize the template accordingly.
5. Initially, an issue can be encountered related to Gmail credentials. In that case, enable 2-step verification for your email and create an app password for the application.

