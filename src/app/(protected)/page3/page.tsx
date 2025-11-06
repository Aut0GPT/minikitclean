import { auth } from '@/auth';
import { Page } from '@/components/PageLayout';
import { Marble, TopBar } from '@worldcoin/mini-apps-ui-kit-react';

export default async function Page3() {
  const session = await auth();

  return (
    <>
      <Page.Header className="p-0">
        <TopBar
          title="Page 3"
          endAdornment={
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold capitalize">
                {session?.user.username}
              </p>
              <Marble src={session?.user.profilePictureUrl} className="w-12" />
            </div>
          }
        />
      </Page.Header>
      <Page.Main className="flex flex-col items-center justify-center gap-6 mb-20">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Page 3
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            This is your third page. Perfect for user profiles, settings, or additional content.
          </p>
          <div className="mt-4 w-full max-w-md space-y-4">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <Marble src={session?.user.profilePictureUrl} className="w-16" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {session?.user.username || 'User'}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {session?.user.walletAddress?.slice(0, 6)}...{session?.user.walletAddress?.slice(-4)}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
              <h3 className="text-md font-semibold text-orange-900 mb-2">
                Settings
              </h3>
              <div className="space-y-2 text-left">
                <div className="flex justify-between items-center py-2 border-b border-orange-200">
                  <span className="text-sm text-gray-700">Notifications</span>
                  <span className="text-sm text-gray-500">Enabled</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-orange-200">
                  <span className="text-sm text-gray-700">Theme</span>
                  <span className="text-sm text-gray-500">Light</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Language</span>
                  <span className="text-sm text-gray-500">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page.Main>
    </>
  );
}
