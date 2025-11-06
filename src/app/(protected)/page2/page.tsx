import { auth } from '@/auth';
import { Page } from '@/components/PageLayout';
import { Marble, TopBar } from '@worldcoin/mini-apps-ui-kit-react';

export default async function Page2() {
  const session = await auth();

  return (
    <>
      <Page.Header className="p-0">
        <TopBar
          title="Page 2"
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
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Page 2
          </h1>
          <p className="text-gray-600 text-lg max-w-md">
            This is your second page. Add your custom content, features, or documentation here.
          </p>
          <div className="mt-4 w-full max-w-md space-y-3">
            <div className="bg-green-50 rounded-xl p-4 border border-green-100">
              <h3 className="text-md font-semibold text-green-900 mb-1">
                Feature 1
              </h3>
              <p className="text-sm text-gray-600">
                Describe your first feature here
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
              <h3 className="text-md font-semibold text-teal-900 mb-1">
                Feature 2
              </h3>
              <p className="text-sm text-gray-600">
                Describe your second feature here
              </p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100">
              <h3 className="text-md font-semibold text-cyan-900 mb-1">
                Feature 3
              </h3>
              <p className="text-sm text-gray-600">
                Describe your third feature here
              </p>
            </div>
          </div>
        </div>
      </Page.Main>
    </>
  );
}
