import { IconLink } from './Icons'

type Props = {
  url: string
  title: string
  description: string
  /** Optional card artwork — shown as the large media header. */
  image?: string
  imageAlt?: string
}

/** X's link preview card: optional media, then domain / title / description. */
export function LinkCard({ url, title, description, image, imageAlt }: Props) {
  const domain = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')

  return (
    <a
      className={`link-card${image ? ' has-media' : ''}`}
      href={url}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {image ? (
        <div className="link-card-media">
          <img src={image} alt={imageAlt ?? ''} loading="lazy" />
        </div>
      ) : null}
      <div className="link-card-body">
        <span className="link-card-domain">
          <IconLink size={13} />
          {domain}
        </span>
        <span className="link-card-title">{title}</span>
        <span className="link-card-desc">{description}</span>
      </div>
    </a>
  )
}
