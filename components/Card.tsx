import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link
            href={href}
            aria-label={`Link to ${title}`}
            className="relative block h-64 w-full md:h-48 lg:h-64"
          >
            <Image alt={title} src={imgSrc} className="mb-0 mt-0 object-cover" fill />
          </Link>
        ) : (
          <div className="relative h-64 w-full md:h-48 lg:h-64">
            <Image alt={title} src={imgSrc} className="mb-0 mt-0 object-cover" fill />
          </div>
        ))}
      <div className="px-6 pb-6">
        <p className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </p>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
