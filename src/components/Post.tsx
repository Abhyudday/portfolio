import { useState } from 'react'
import type { ReactNode } from 'react'
import { SITE, PROFILE } from '../config'
import { MEDIA } from '../data/media'
import { RichText } from './RichText'
import {
  IconDots,
  IconHeart,
  IconHeartFill,
  IconPin,
  IconReply,
  IconRepost,
  IconShare,
  IconVerified,
  IconViews,
} from './Icons'

export type PostProps = {
  /** Body copy. Supports the RichText inline markup. */
  text?: string
  /** Position marker in place of a timestamp — real data, no invented dates. */
  position?: string
  /** Real date from the source data, when the item has one. */
  date?: string
  /** Org avatar layered over the author avatar. */
  orgAvatar?: string
  orgAlt?: string
  /** Continue the vertical connector line down to the next post. */
  connected?: boolean
  /** First post in a thread — reserves the top of the connector. */
  head?: boolean
  /** Pin label, rendered above the header the way X marks a pinned post. */
  pin?: string
  children?: ReactNode
  onOpen?: () => void
  /** Accessible label when the post is clickable. */
  openLabel?: string
}

/** Bare action bar. X shows icons with no counter at zero engagement. */
function Actions() {
  const [liked, setLiked] = useState(false)

  return (
    <div className="post-actions">
      <span className="act" aria-hidden="true">
        <span className="act-ring">
          <IconReply />
        </span>
      </span>
      <span className="act act-green" aria-hidden="true">
        <span className="act-ring">
          <IconRepost />
        </span>
      </span>
      <button
        type="button"
        className={`act act-pink${liked ? ' is-on' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          setLiked((v) => !v)
        }}
        aria-pressed={liked}
        aria-label={liked ? 'Undo like' : 'Like'}
      >
        <span className="act-ring">{liked ? <IconHeartFill /> : <IconHeart />}</span>
      </button>
      <span className="act" aria-hidden="true">
        <span className="act-ring">
          <IconViews />
        </span>
      </span>
      <span className="act" aria-hidden="true">
        <span className="act-ring">
          <IconShare />
        </span>
      </span>
    </div>
  )
}

export function Post({
  text,
  position,
  date,
  orgAvatar,
  orgAlt,
  connected,
  head,
  pin,
  children,
  onOpen,
  openLabel,
}: PostProps) {
  const clickable = Boolean(onOpen)

  return (
    <article
      className={`post${connected ? ' is-connected' : ''}${head ? ' is-head' : ''}${
        clickable ? ' is-clickable' : ''
      }`}
      onClick={clickable ? onOpen : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onOpen?.()
              }
            }
          : undefined
      }
      tabIndex={clickable ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      aria-label={clickable ? openLabel : undefined}
    >
      {pin ? (
        <div className="post-pin">
          <IconPin size={14} />
          <span>{pin}</span>
        </div>
      ) : null}

      <div className="post-rail">
        <div className="post-avatar">
          <img src={MEDIA.avatar} alt="" width={48} height={48} />
          {orgAvatar ? <img className="post-org" src={orgAvatar} alt={orgAlt ?? ''} /> : null}
        </div>
        {connected ? <span className="post-thread-line" aria-hidden="true" /> : null}
      </div>

      <div className="post-body">
        <header className="post-head">
          <span className="post-name">{SITE.name}</span>
          <IconVerified className="badge" />
          <span className="post-handle">@{PROFILE.handle}</span>
          {position || date ? (
            <>
              <span className="post-dot">·</span>
              <span className="post-time num">{date ?? position}</span>
            </>
          ) : null}
          <span className="post-more" aria-hidden="true">
            <IconDots size={17} />
          </span>
        </header>

        {text ? (
          <p className="post-text">
            <RichText text={text} />
          </p>
        ) : null}

        {children}

        <Actions />
      </div>
    </article>
  )
}
