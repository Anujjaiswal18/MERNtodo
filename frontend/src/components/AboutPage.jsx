import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl text-center font-bold text-gray-800">About Us</h1>
          
        </div>
      </header>

      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">About the App</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to our To-Do App! This simple yet powerful application helps you stay organized and track your tasks efficiently. Whether it's your daily chores, work tasks, or personal goals, you can manage them all with ease.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features:</h3>
        <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
          <li>✔ Create and manage tasks</li>
          <li>✔ Mark tasks as completed</li>
          <li>✔ Delete tasks when done</li>
          <li>✔ Organize tasks with ease</li>
          <li>✔ Mobile-responsive design</li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">How to Use:</h3>
        <p className="text-lg text-gray-700 mb-6">
          Simply add tasks to your to-do list, mark them as done when you're finished, and delete them when no longer needed. It's easy to use and helps you stay productive!
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Contact Us:</h3>
        <p className="text-lg text-gray-700">
          If you have any questions or suggestions, feel free to <a href="mailto:contact@todoapp.com" className="text-blue-500 hover:underline">contact us</a>.
        </p>
      </section>

      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} To-Do App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
