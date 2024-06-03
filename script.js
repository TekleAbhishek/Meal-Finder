document.addEventListener('DOMContentLoaded', () => {
    fetchCategories();
});

const fetchCategories = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        displayCategories(data.categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

