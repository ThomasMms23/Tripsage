import { Button } from "@/app/components/ui/button";

export function Pricing() {
  return (
    <section className="flex justify-center w-full py-12 md:py-24 lg:py-32  bg-dark-color">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="mx-auto grid max-w-4xl gap-4 text-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-50">
              Pricing
            </h2>
            <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed dark:text-gray-400">
              Choose the plan that fits your needs. No hidden fees, ever.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 ">
          <div className="rounded-lg  p-6 shadow-sm  dark:bg-main-color">
            <div className="flex flex-col h-full gap-3 relative min-h-96">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-50">Free</h3>
                <p className="text-gray-400 dark:text-gray-400">
                  Get started for free.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-50">$0</div>
                <p className="text-gray-400 dark:text-gray-400">per month</p>
              </div>
              <ul className="grid gap-2 text-sm text-gray-400 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  1 user
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  1 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  Basic features
                </li>
              </ul>
              <Button className="w-full absolute bottom-3">Get started</Button>
            </div>
          </div>
          <div className=" rounded-lg  p-6 shadow-sm  dark:bg-main-color">
            <div className="relative flex flex-col h-full gap-3 min-h-96	">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-50">Pro</h3>
                <p className="text-gray-400 dark:text-gray-400">
                  Get started for free.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-50">$19</div>
                <p className="text-gray-400 dark:text-gray-400">per month</p>
              </div>
              <ul className="grid gap-2 text-sm text-gray-400 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  1 user
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  1 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  Basic features
                </li>
              </ul>
              <Button className="w-full absolute bottom-3">Get started</Button>
            </div>
          </div>
          <div className="relative rounded-lg border p-6 shadow-sm dark:bg-main-color  dark:border-main-yellow">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-main-yellow semi-bold px-1.5 py-0.5 rounded-full text-xs uppercase font-semibold">
              Popular
            </span>
            <div className="flex flex-col relative h-full gap-3 min-h-96">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-50">Entreprise</h3>
                <p className="text-gray-400 dark:text-gray-400">
                  For growing teams.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-50">$29</div>
                <p className="text-gray-400 dark:text-gray-400">per month</p>
              </div>
              <ul className="grid gap-2 text-sm text-gray-400 dark:text-gray-400">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  5 users
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  50 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  Advanced features
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 fill-gray-900 dark:fill-gray-50" />
                  Priority support
                </li>
              </ul>
              <Button className="w-full absolute bottom-3 bg-main-yellow">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
