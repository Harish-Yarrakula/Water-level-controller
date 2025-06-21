import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Automated Control',
    description:
      'It starts/stops motor automatically based on the levels adjusted by user wuth no human interaction',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Real-time Monitoring',
    description:
      'You can Monitor all your filling and usage timings and set automatically fill at a particular time.',
    icon: LockClosedIcon,
  },
  {
    name: 'Alert System',
    description:
      'It alerts the user and stops the water flow automatically without any assitance',
    icon: ArrowPathIcon,
  },
  {
    name: 'Coservation',
    description:
      'By using this you can save water form overflow, electricity for excess usge which helps in environment conservation',
    icon: FingerPrintIcon,
  },
]

export default function Features(){
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Manage Waterflow Easier</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to manage your water
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
           Monitor and manage your water tank effortlessly with our smart level controller. Get real-time water level updates, avoid overflows, and optimize water usage—all from your phone.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}