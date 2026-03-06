export default function DeleteAccount() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Delete Account – Viewvers</h1>

      <p className="text-gray-600 mb-6">
        If you would like to delete your Viewvers account and associated data,
        please follow the steps below:
      </p>

      <ol className="list-decimal ml-6 space-y-3 text-gray-700">
        <li>Send an email to: <b>support@viewvers.app</b></li>
        <li>Use the subject line: <b>"Delete My Account"</b></li>
        <li>Include the email address used to sign in to the Viewvers app.</li>
      </ol>

      <p className="mt-6 text-gray-600">
        Your account and all associated data (including uploaded photos)
        will be permanently deleted within <b>7 business days</b>.
      </p>

      <p className="mt-6 text-gray-600">
        If you have any questions regarding account deletion, please contact
        support@viewvers.app.
      </p>
    </main>
  );
}