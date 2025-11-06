import { Page } from '@/components/PageLayout';
import { AuthButton } from '../components/AuthButton';

export default function Home() {
  return (
    <Page>
      <Page.Main className="flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Mini App
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            Sign in with your World wallet to access your personalized experience
          </p>
        </div>
        <AuthButton />
      </Page.Main>
    </Page>
  );
}
