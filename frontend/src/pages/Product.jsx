import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'No Human Interaction',
    description:
      'Automatically monitors and controls water levels without requiring manual checks or switching. Ideal for overhead tanks, sumps, and industrial storage systems.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Automated Waterflow',
    description: 'Automatically turns pumps on or off based on precise water level sensors, ensuring optimal water flow and preventing overflow or dry-run damage.',
    icon: LockClosedIcon,
  },
  {
    name: 'Live Monitoring',
    description: 'Get real-time updates on water levels, pump status, and system health via a mobile app or dashboard—ensuring full visibility from anywhere.',
    icon: ServerIcon,
  },
]

export default function Product() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Life Easier</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better flow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Monitor and manage your water tank effortlessly with our smart level controller. Get real-time water level updates, avoid overflows, and optimize water usage—all from your phone.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="product(1).png"
            width={1000}
            height={1000}
            className="max-w-none my-auto rounded-xl shadow-xl ring-1 ring-gray-200/10 sm:w-228 md:-ml-4 lg:-ml-6"
          />
        </div>
      </div>
    </div>
  )
}
