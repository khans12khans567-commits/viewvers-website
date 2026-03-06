export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold mb-6">Privacy Policy – Viewvers</h1>

      <p className="text-gray-600 mb-10">
        Effective Date: 25/02/2026
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Introduction</h2>
      <p className="text-gray-700">
        Viewvers (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal
        information. This Privacy Policy explains what information we collect, how we use it,
        and how it is protected when you use the Viewvers mobile application.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">2. Information We Collect</h2>

      <h3 className="font-semibold mt-6 mb-2">Account Information</h3>
      <p className="text-gray-700">
        When you sign in using Google Sign-In, we may collect:
      </p>

      <ul className="list-disc ml-6 text-gray-700 mt-2">
        <li>Your name</li>
        <li>Your email address</li>
        <li>Your Google account unique ID</li>
      </ul>

      <p className="text-gray-700 mt-4">
        This information is used only to authenticate your account,
        enable login functionality, allow content uploads,
        and associate uploaded content with your account.
      </p>

      <p className="text-gray-700 mt-3">
        We do not collect or store your Google password.
      </p>

      <h3 className="font-semibold mt-8 mb-2">User Uploaded Content</h3>

      <p className="text-gray-700">
        If you upload photos within the app:
      </p>

      <ul className="list-disc ml-6 text-gray-700 mt-2">
        <li>Photos are stored securely using Firebase Storage.</li>
        <li>Uploaded photos may be displayed within the app.</li>
        <li>You may request deletion of your uploaded content by contacting us.</li>
      </ul>

      <p className="text-gray-700 mt-4">
        We do not claim ownership of user uploaded content.
      </p>

      <h3 className="font-semibold mt-8 mb-2">Automatically Collected Technical Data</h3>

      <p className="text-gray-700">
        We may use Firebase services that automatically collect limited technical information such as:
      </p>

      <ul className="list-disc ml-6 text-gray-700 mt-2">
        <li>Device type</li>
        <li>App version</li>
        <li>Crash logs</li>
        <li>Performance data</li>
      </ul>

      <p className="text-gray-700 mt-4">
        This information is used strictly to improve app functionality and stability.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">3. Third-Party Services</h2>

      <p className="text-gray-700">
        Viewvers integrates third-party services including Google Sign-In, Firebase,
        Unsplash images, Google services for place information,
        weather data providers, and external booking platforms such as
        Booking.com, Agoda, and Trip.com.
      </p>

      <p className="text-gray-700 mt-4">
        These services may collect data according to their own privacy policies.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">4. Data Security</h2>

      <p className="text-gray-700">
        We use secure Google Cloud and Firebase infrastructure to protect user data
        from unauthorized access or misuse.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">5. Data Deletion Requests</h2>

      <p className="text-gray-700">
        Users may request account deletion or removal of uploaded content by contacting:
      </p>

      <p className="text-gray-700 font-semibold mt-3">
        support@viewvers.app
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">6. Children’s Privacy</h2>

      <p className="text-gray-700">
        Viewvers is not directed toward children under the age of 13 and does not knowingly
        collect personal information from children.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">7. Changes to This Privacy Policy</h2>

      <p className="text-gray-700">
        We may update this Privacy Policy from time to time.
        Any updates will be reflected on this page with a revised effective date.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">8. Contact Us</h2>

      <p className="text-gray-700">
        If you have any questions regarding this Privacy Policy, please contact:
      </p>

      <p className="text-gray-700 font-semibold mt-3">
        support@viewvers.app
      </p>

    </main>
  );
}