import { CLIENTS, EDUCATION, STATS } from '../data/stats'
import { EXPERIENCE, ADDITIONAL_EXPERIENCE } from '../data/experience'
import { SKILL_GROUPS } from '../data/skills'
import { WORKS } from '../data/works'
import { THREADS } from '../data/sections'
import { COMPANY_MEDIA, WORK_MEDIA } from '../data/media'
import { ABOUT, ALSO_RUNNING, CLIENTS_HEADING, CONTACT } from '../data/copy'
import { SITE, SOCIAL } from '../config'
import { HireMenu } from './HireMenu'
import { Post } from './Post'
import { LinkCard } from './LinkCard'
import { RichText } from './RichText'
import {
  IconArrowUpRight,
  IconCalendar,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconLocation,
  IconMail,
  IconTarget,
  IconX,
} from './Icons'

const meta = (id: string) => THREADS.find((t) => t.id === id)!

/** Thread opener — the numbered header X shows above a pinned conversation. */
function ThreadHeader({ id }: { id: string }) {
  const t = meta(id)
  return (
    <div className="thread-head">
      <span className="thread-no num">{t.no}</span>
      <h2 className="thread-title">{t.title}</h2>
      <span className="thread-note">{t.note}</span>
    </div>
  )
}

/* ------------------------------------------------------------- 01 The bio */

export function ThreadAbout() {
  return (
    <section className="thread" id="about" aria-labelledby="thread-about">
      <ThreadHeader id="about" />
      <h3 className="sr-only" id="thread-about">
        {meta('about').title}
      </h3>
      {ABOUT.map((para, i) => (
        <Post
          key={i}
          text={para}
          position={`${i + 1}/${ABOUT.length}`}
          head={i === 0}
          connected={i < ABOUT.length - 1}
        />
      ))}
    </section>
  )
}

/* ----------------------------------------------------------- 02 Rap sheet */

export function ThreadRecord() {
  const total = EXPERIENCE.length + 1

  return (
    <section className="thread" id="record" aria-labelledby="thread-record">
      <ThreadHeader id="record" />
      <h3 className="sr-only" id="thread-record">
        {meta('record').title}
      </h3>

      {EXPERIENCE.map((job, i) => (
        <Post
          key={job.id}
          position={`${i + 1}/${total}`}
          date={job.dateRange}
          orgAvatar={COMPANY_MEDIA[job.id]}
          orgAlt={`${job.company} logo`}
          head={i === 0}
          connected
        >
          <div className="role">
            <div className="role-top">
              <span className="role-title">{job.title}</span>
              <span className="role-at">@</span>
              <span className="role-company">{job.company}</span>
              {job.stat ? <span className="role-stat num">{job.stat}</span> : null}
            </div>
            <p className="role-tagline">
              {job.tagline} · {job.location}
            </p>
          </div>
          <ul className="post-bullets">
            {job.description.map((line, n) => (
              <li key={n}>
                <RichText text={line} />
              </li>
            ))}
          </ul>
        </Post>
      ))}

      <Post position={`${total}/${total}`} text={ALSO_RUNNING} head={false}>
        <div className="side-roles">
          {ADDITIONAL_EXPERIENCE.map((role) => (
            <div className="side-role" key={role.id}>
              <div className="side-role-top">
                <span className="side-role-title">{role.title}</span>
                {role.stat ? <span className="side-role-stat num">{role.stat}</span> : null}
              </div>
              <span className="side-role-company">{role.company}</span>
              <p className="side-role-tagline">{role.tagline}</p>
              <p className="side-role-meta">
                {role.dateRange} · {role.location}
              </p>
              <ul className="post-bullets">
                {role.description.map((line, n) => (
                  <li key={n}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Post>
    </section>
  )
}

/* ------------------------------------------------------------ 03 Missions */

export function ThreadMissions({ onOpen }: { onOpen: (id: string) => void }) {
  const total = WORKS.length

  return (
    <section className="thread" id="missions" aria-labelledby="thread-missions">
      <ThreadHeader id="missions" />
      <h3 className="sr-only" id="thread-missions">
        {meta('missions').title}
      </h3>

      {WORKS.map((work, i) => (
        <Post
          key={work.id}
          position={`${i + 1}/${total}`}
          date={work.year}
          head={i === 0}
          connected={i < total - 1}
          onOpen={() => onOpen(work.id)}
          openLabel={`Open details for ${work.name}`}
        >
          <div className="mission">
            <div className="mission-top">
              <span className="mission-name">{work.name}</span>
              <span className="chip">{work.platform}</span>
              {work.metric ? (
                <span className="mission-metric num">
                  <IconTarget size={13} />
                  {work.metric}
                </span>
              ) : null}
            </div>
            <p className="mission-subtitle">{work.subtitle}</p>
            <p className="post-text">{work.description}</p>
            <ul className="chips">
              {work.stack.map((tech) => (
                <li className="chip" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <LinkCard
            url={work.url}
            title={work.name}
            description={work.subtitle}
            image={WORK_MEDIA[work.id]}
            imageAlt={`${work.name} artwork`}
          />
        </Post>
      ))}
    </section>
  )
}

/* ------------------------------------------------------------- 04 Loadout */

export function ThreadLoadout() {
  const total = SKILL_GROUPS.length

  return (
    <section className="thread" id="loadout" aria-labelledby="thread-loadout">
      <ThreadHeader id="loadout" />
      <h3 className="sr-only" id="thread-loadout">
        {meta('loadout').title}
      </h3>

      {SKILL_GROUPS.map((group, i) => (
        <Post
          key={group.title}
          position={`${i + 1}/${total}`}
          head={i === 0}
          connected={i < total - 1}
        >
          <div className="skill-group">
            <span className="skill-title">{group.title}</span>
            <ul className="chips">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Post>
      ))}
    </section>
  )
}

/* ------------------------------------------------------------ 05 Training */

export function ThreadEducation() {
  return (
    <section className="thread" id="education" aria-labelledby="thread-education">
      <ThreadHeader id="education" />
      <h3 className="sr-only" id="thread-education">
        {meta('education').title}
      </h3>

      <Post position="1/2" date={EDUCATION.dateRange} head connected>
        <div className="edu">
          <span className="edu-degree">{EDUCATION.degree}</span>
          <span className="edu-school">{EDUCATION.school}</span>
          <span className="edu-dates num">
            <IconCalendar size={14} />
            {EDUCATION.dateRange}
          </span>
        </div>
        <ul className="post-bullets">
          {EDUCATION.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </Post>

      <Post position="2/2" text={CLIENTS_HEADING}>
        <ul className="chips">
          {CLIENTS.map((client) => (
            <li className="chip" key={client}>
              {client}
            </li>
          ))}
        </ul>
      </Post>
    </section>
  )
}

/* ------------------------------------------------------------ 06 Safehouse */

export function ThreadContact() {
  return (
    <section className="thread" id="contact" aria-labelledby="thread-contact">
      <ThreadHeader id="contact" />
      <h3 className="sr-only" id="thread-contact">
        {meta('contact').title}
      </h3>

      <Post position="1/1" head>
        <p className="contact-kicker">
          <span className="live-dot" aria-hidden="true" />
          {CONTACT.kicker}
        </p>
        <p className="contact-mark">
          <RichText text={CONTACT.mark} />
        </p>
        <p className="post-text">{CONTACT.sub}</p>

        <div className="contact-actions">
          <HireMenu label="Hire me" />
          <a
            className="btn"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <IconGitHub size={15} />
            {CONTACT.primaryCta}
            <IconArrowUpRight size={13} />
          </a>
        </div>

        <ul className="contact-links">
          <li>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(SITE.hireSubject)}`}
              onClick={(e) => e.stopPropagation()}
            >
              <IconMail size={14} /> {SITE.email}
            </a>
          </li>
          <li>
            <a href={SOCIAL.x} target="_blank" rel="noreferrer">
              <IconX size={14} /> X
            </a>
          </li>
          <li>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer">
              <IconLinkedIn size={14} /> LinkedIn
            </a>
          </li>
          <li>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer">
              <IconInstagram size={14} /> Instagram
            </a>
          </li>
          <li>
            <span className="contact-loc">
              <IconLocation size={14} /> {SITE.location}
            </span>
          </li>
        </ul>
      </Post>
    </section>
  )
}

/* -------------------------------------------------- pinned headline metrics */

export function PinnedStats() {
  return (
    <section className="thread" aria-label="Headline metrics">
      <Post pin="Pinned" head>
        <ul className="figures">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <span className="figure-value num">{stat.value}</span>
              <span className="figure-label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </Post>
    </section>
  )
}
