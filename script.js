function calculateScore() {
    const form = document.getElementById('quizForm');
    let score = 0;

    const questions = [
        'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'
    ];

    questions.forEach(question => {
        const answer = form[question].value;
        score += parseInt(answer);
    });

    let resultText = '';
    
    if (score >= 30) {
        resultText = `
            <h2>Longevity Champion (30-35 points) 🏆</h2>
            <p>You’re a true advocate of the longevity lifestyle! Your diet is well-balanced, nutrient-dense, and aligned with the principles of optimal health. Keep up the great work and continue exploring new ways to enhance your well-being.</p>
            <p><strong>Suggestions:</strong></p>
            <ul>
                <li>Continue to diversify your meals with a variety of whole foods.</li>
                <li>Explore advanced nutritional strategies like intermittent fasting.</li>
                <li>Stay informed about the latest in nutritional science to keep your diet optimized.</li>
            </ul>
        `;
    } else if (score >= 20) {
        resultText = `
            <h2>Health Seeker (20-29 points) 🌟</h2>
            <p>You’re on the right path! Your diet shows a strong commitment to health, but there are areas for improvement. With some adjustments, you can elevate your eating habits to support long-term health and vitality.</p>
            <p><strong>Suggestions:</strong></p>
            <ul>
                <li>Focus on reducing processed foods and increasing whole foods.</li>
                <li>Consider incorporating more healthy snacks into your daily routine.</li>
                <li>Educate yourself on the benefits of supplements and personalized nutrition.</li>
            </ul>
        `;
    } else if (score >= 10) {
        resultText = `
            <h2>Balanced Beginner (10-19 points) 🌿</h2>
            <p>You’re starting to understand the importance of a healthy diet, but there’s room to grow. Making conscious choices and small changes can significantly impact your overall health and longevity.</p>
            <p><strong>Suggestions:</strong></p>
            <ul>
                <li>Begin by incorporating more fruits and vegetables into your meals.</li>
                <li>Replace sugary drinks with water or herbal teas.</li>
                <li>Start experimenting with simple, healthy recipes from the book.</li>
            </ul>
        `;
    } else {
        resultText = `
            <h2>Nutrition Newbie (0-9 points) 🌱</h2>
            <p>It looks like you’re at the beginning of your journey to better nutrition. Don’t be discouraged – everyone starts somewhere! With the guidance in this book, you can transform your eating habits and take control of your health.</p>
            <p><strong>Suggestions:</strong></p>
            <ul>
                <li>Focus on making one small, healthy change each week.</li>
                <li>Educate yourself on the basics of macronutrients and food quality.</li>
                <li>Use the 28-day meal plan to kickstart your journey to better health.</li>
            </ul>
        `;
    }

    document.getElementById('result').innerHTML = resultText;
}
