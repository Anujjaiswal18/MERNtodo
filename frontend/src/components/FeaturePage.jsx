import React from 'react';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <header className="mb-8">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold text-gray-800">Web Features</h1>
         
        </div>
      </header>

      <section className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features of Our To-Do App</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our To-Do app provides several powerful features to help you stay organized and productive. Here's a quick overview of the key features that make the app stand out:
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Task Management</h3>
            <p className="text-gray-700 text-center">
              Easily create, update, and manage your tasks. Stay on top of your daily to-dos.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Task Priority</h3>
            <p className="text-gray-700 text-center">
              Mark tasks with different priority levels to keep track of what's most important.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-yellow-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Deadline Reminders</h3>
            <p className="text-gray-700 text-center">
              Set deadlines for your tasks and receive timely reminders to stay on track.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-pink-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Task Categorization</h3>
            <p className="text-gray-700 text-center">
              Categorize your tasks by type, making it easier to sort and find them.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-purple-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Completed Tasks</h3>
            <p className="text-gray-700 text-center">
              Mark tasks as completed and keep track of your progress over time.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-teal-50 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mobile Responsive</h3>
            <p className="text-gray-700 text-center">
              Access your tasks and manage them from any device, thanks to the mobile-friendly design.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-600">
        <p>&copy; 2025 To-Do App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FeaturesPage;
