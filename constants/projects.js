import imageJob from "../public/assets/projects/screencapture-job.png";
import imageJobScroll from "../public/assets/projects/screencapture-job-full.png";
import imageEcommVue from "../public/assets/projects/screencapture-ecomm-vue.png";
import imageEcommVueScroll from "../public/assets/projects/screencapture-ecomm-vue-full.png";
import imageEcommAngular from "../public/assets/projects/screencapture-ecomm-angular.png";
import imageEcommAngularScroll from "../public/assets/projects/screencapture-ecomm-angular-full.png";
import imageEcommPhp from "../public/assets/projects/screencapture-ecomm-php.png";
import imageEcommPhpScroll from "../public/assets/projects/screencapture-ecomm-php-full.png";
import imageNewPhp from "../public/assets/projects/screencapture-new-php.png";
import imageNewPhpScroll from "../public/assets/projects/screencapture-new-php-full.png";

export const PROJECTS = [
    {
        id: 1,
        name: "ECOMMERCE VUE",
        image: imageEcommVue,
        image_scroll: imageEcommVueScroll,
        desc: "Display product details, display product list, add to cart, checkout, order status, register, login, CRUD products, ... ",
        main_features: [
            "Display Product Details: Allows users to view detailed information about a product such as images, descriptions, prices, ratings, and reviews from other users.",
            "Display Product List: Shows a list of available products for users to browse and easily search for items.",
            "Add to Cart: Enables users to add products to their shopping cart for later purchase.",
            "Checkout: Provides a payment interface for users to input payment information and submit their orders.",
            "Order Status: Provides users with updates on the status of their orders from placement to delivery.",
            "Register: Allows users to create a new account on the ecommerce website to store personal information and purchase history.",
            "Login: Allows users to log into their accounts to manage personal information and order history.",
            "CRUD Products (Create, Read, Update, Delete Products): Provides a management interface for administrators to add, edit, and delete products from the store. This includes managing product information such as name, description, price, images, and other attributes."
        ],
        date: {
            start_day: "03/2024",
            end_day: "03/2024"
        },
        employ_technology: [
            "Vue 3", 
            "Firebase", 
            "Tailwind", 
            "HTML"
        ]
    },
    {
        id: 2,
        name: "ECOMMERCE ANGULAR",
        image: imageEcommAngular,
        image_scroll: imageEcommAngularScroll,
        desc: "Display product details, display product list, add to cart, checkout, order status, register, login, CRUD products, ... ",
        main_features: [
            "Display Product Details: Allows users to view detailed information about a product such as images, descriptions, prices, ratings, and reviews from other users.",
            "Display Product List: Shows a list of available products for users to browse and easily search for items.",
            "Add to Cart: Enables users to add products to their shopping cart for later purchase.",
            "Checkout: Provides a payment interface for users to input payment information and submit their orders.",
            "Order Status: Provides users with updates on the status of their orders from placement to delivery.",
            "Register: Allows users to create a new account on the ecommerce website to store personal information and purchase history.",
            "Login: Allows users to log into their accounts to manage personal information and order history.",
            "CRUD Products (Create, Read, Update, Delete Products): Provides a management interface for administrators to add, edit, and delete products from the store. This includes managing product information such as name, description, price, images, and other attributes.",
            "Search Product: Allows users to input search keywords to find products easily."
        ],
        date: {
            start_day: "06/2023",
            end_day: "08/2023"
        },
        employ_technology: [
            "Angular", 
            "HTML",
            "SCSS",
            "Bootstrap",
            "Json-server"
        ]
    },
    {
        id: 3,
        name: "ECOMMERCE PHP",
        image: imageEcommPhp,
        image_scroll: imageEcommPhpScroll,
        desc: "Search, shopping cart, order management system, reviews, comments, ... ",
        main_features: [
            "Search: Allows users to search for specific items or content within the website easily.",
            "Shopping Cart: Enables users to add items they wish to purchase and manage them before proceeding to checkout.",
            "Order Management System: Provides functionality for users and administrators to track, manage, and process orders efficiently.",
            "Reviews: Allows users to leave feedback and reviews on products or services, helping other users make informed decisions.",
            "Comments: Enables users to engage with content by leaving comments, fostering interaction and discussion within the community.",
            "CRUD Product Management: Provides administrators with the ability to Create, Read, Update, and Delete products on the website. This feature allows for easy management and maintenance of the product catalog.",
            "Order Statistics: Includes a page dedicated to providing comprehensive statistics on various aspects of the website's orders and performance. This may include total revenue, order status distribution, number of orders, and visitor traffic data such as weekly page views.",
            "Email Billing: Automatically sends a billing invoice to the user's email address upon successful completion of an order. The invoice contains details such as itemized purchases, total cost, payment method, and transaction ID.",
            "Order Confirmation for Administrators: Sends an order confirmation notification to the administrators or relevant staff members upon the placement of a new order. This notification includes essential details of the order, such as customer information, purchased items, order total, and shipping details."
        ],
        date: {
            start_day: "06/2023",
            end_day: "08/2023"
        },
        employ_technology: [
            "HTML", 
            "CSS",
            "Jquery",
            "Bootstrap",
            "PHP",
            "MySql"
        ]
    },
    {
        id: 4,
        name: "NEWSPAPER LARAVEL",
        image: imageNewPhp,
        image_scroll: imageNewPhpScroll,
        desc: "The website features multi-sector news display, categorizing news into dierent sections, and enables user registration and login, ...",
        main_features: [
            "Multi-sector News Display: The website showcases news across various sectors, allowing users to explore diverse topics conveniently.",
            "Categorization of News: News articles are sorted into different sections, enabling easy navigation and quick access to specific topics.",
            "User Registration and Login: Visitors can register and log in to access personalized features and content tailored to their preferences.",
            "Personalized Experience: Registered users enjoy a personalized browsing experience, including customized news feeds and recommendations.",
            "Accessibility and Convenience: The website is designed for easy navigation and seamless access to news content, ensuring a user-friendly experience.",
        ],
        date: {
            start_day: "10/2023",
            end_day: "11/2023"
        },
        employ_technology: [
            "HTML", 
            "CSS",
            "Jquery",
            "Bootstrap",
            "PHP(Laravel)",
            "MySql"
        ]
    },
    {
        id: 5,
        name: "JOBSEARCH PHP",
        image: imageJob,
        image_scroll: imageJobScroll,
        desc: "The website features multi-sector news display, categorizing news into dierent sections, and enables user registration and login, ...",
        main_features: [
            "Job Search: Allows users to search for job openings based on keywords, location, and industry preferences, providing tailored results matching their criteria.",
            "Account Registration: Enables users to create personal accounts on the website, facilitating access to additional features and personalized job recommendations.",
            "Personal Profile Management: Allows users to manage their personal profiles, including updating contact information, uploading resumes, and setting preferences for job alerts.",
            "Employer Account: Allows employers to create accounts on the platform, giving them the ability to post job openings and manage their company profiles.",
            "Job Posting: Enables employers to post job vacancies, including job descriptions, requirements, and application instructions.",
            "Company Profile Management: Provides employers with tools to manage their company profiles, including adding company information, uploading logos, and showcasing company culture.",
            "Administrator Job Management: Administrators can also add job listings on behalf of employers, ensuring a comprehensive job database.",
            "Review and Comment: Users, including administrators, can leave reviews and comments on company profiles, providing valuable insights for job seekers and employers.",
            "Email Notifications to Employers: Automatically sends email notifications to employers upon receiving job applications, providing them with timely updates and facilitating communication with applicants.",
            "Messaging System: Allows users to send messages directly to employers/recruiters, facilitating communication regarding job opportunities, application status, and other inquiries.",
            "Job Bookmarking: Enables users to bookmark or 'save' jobs of interest for future reference, making it easier to track and revisit preferred job listings.",
            "Applied Jobs Tracking: Provides users with a list of jobs they have applied for, along with their application status, allowing them to keep track of their job search progress.",
            "Candidate Application Management: Allows employers/recruiters to view and manage a list of candidates who have applied for their job openings, including accessing their resumes and application details.",
            "Resume Viewing: Enables employers/recruiters to view the resumes of candidates who have applied for their job openings, helping them assess candidates' qualifications and suitability for the position.",
        ],
        date: {
            start_day: "10/2023",
            end_day: "11/2023"
        },
        employ_technology: [
            "HTML", 
            "CSS",
            "Jquery",
            "Bootstrap",
            "PHP",
            "MySql"
        ]
    },
];
