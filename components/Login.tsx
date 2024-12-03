import { socialLogin } from "@/actions";

export default function LoginGoogleButton() {
  return (
    <form action={socialLogin}>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <button
          type="submit"
          name="action"
          value="google"
          className="flex items-center gap-2 py-2 px-4 bg-white border border-gray-300 rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring focus:ring-blue-200"
        >
          <span className="text-sm font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>
      </div>
    </form>
  );
}
