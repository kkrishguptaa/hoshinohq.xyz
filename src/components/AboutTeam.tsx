import { Dialog } from "@base-ui/react/dialog";
import { useState } from "react";
import type { TeamMember } from "../content/site";
import {
  bodyClass,
  headingClass,
  labelClass,
  panelClass,
  sectionClass,
} from "../lib/ui";

type AboutTeamProps = {
  team: TeamMember[];
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamLinks({ links }: { links?: TeamMember["links"] }) {
  if (!links?.length) {
    return null;
  }

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {links.map((link) => (
        <a
          className="inline-flex items-center rounded-full border border-[#e7cc8f]/25 bg-white/4 px-3 py-2 text-sm text-slate-200 transition hover:border-[#e7cc8f]/45 hover:text-white"
          href={link.href}
          key={`${link.label}-${link.href}`}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function MemberAvatar({
  member,
  aspectClass,
  sizeClass,
}: {
  member: TeamMember;
  aspectClass: string;
  sizeClass?: string;
}) {
  if (member.imageSrc) {
    return (
      <img
        className={`${aspectClass} ${sizeClass ?? "w-full"} rounded-[20px] object-cover`}
        src={member.imageSrc}
        alt={member.name}
      />
    );
  }

  return (
    <div
      className={`${aspectClass} ${sizeClass ?? "w-full"} grid place-items-center rounded-[20px] bg-[radial-gradient(circle_at_top,rgba(136,214,255,0.3),transparent_40%),linear-gradient(145deg,rgba(20,39,62,0.94),rgba(10,24,40,0.9))] text-5xl font-display tracking-[-0.05em] text-[#f5e6bf]`}
    >
      {getInitials(member.name)}
    </div>
  );
}

function MemberCard({
  member,
  onOpen,
}: {
  member: TeamMember;
  onOpen: (member: TeamMember) => void;
}) {
  return (
    <button
      className={`${panelClass} group h-full max-w-60 text-left transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5e6bf]`}
      onClick={() => onOpen(member)}
      type="button"
    >
      <MemberAvatar member={member} aspectClass="aspect-square" />
      <div className="mt-5">
        <p className={`${labelClass} text-xs!`}>{member.role}</p>
        <h3 className={`${headingClass} mt-3 text-3xl`}>{member.name}</h3>
        <p className={`${bodyClass} mt-3 line-clamp-3 text-sm`}>{member.bio}</p>
      </div>
    </button>
  );
}

export function AboutTeam({ team }: AboutTeamProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className={sectionClass} id="team">
        <div className="mb-7 space-y-4">
          <p className={labelClass}>About us</p>
          <h2 className={`${headingClass} max-w-[20ch] text-5xl sm:text-6xl`}>
            We are building the kind of teen event we would want to walk into.
          </h2>
          <p className={`${bodyClass} max-w-3xl`}>
            Hoshino is organized by a small team that cares about taste,
            momentum, and giving young builders a room that feels serious in the
            best way. Photos can arrive later. The people behind it should not.
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-4">
          {team.map((member) => (
            <MemberCard
              key={member.name}
              member={member}
              onOpen={setSelectedMember}
            />
          ))}
        </div>
      </section>
      <Dialog.Root
        open={selectedMember !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedMember(null);
          }
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-70 bg-slate-950/80 backdrop-blur-sm" />
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-80 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-[#09131f]/95 p-6 shadow-[0_28px_80px_rgba(3,8,16,0.46)] backdrop-blur-2xl sm:p-8">
            {selectedMember ? (
              <div className="space-y-5 relative">
                <div className="flex items-start justify-between gap-4">
                  <Dialog.Close className="inline-flex fixed right-5 top-5 h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/4 text-xl text-white transition hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5e6bf]">
                    ×
                  </Dialog.Close>
                </div>
                <div className="grid gap-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-start">
                  {selectedMember.imageSrc ? (
                    <img
                      className="aspect-square w-full rounded-[22px] object-cover"
                      src={selectedMember.imageSrc}
                      alt={selectedMember.name}
                    />
                  ) : (
                    <div className="grid aspect-square w-full place-items-center rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(136,214,255,0.3),transparent_40%),linear-gradient(145deg,rgba(20,39,62,0.94),rgba(10,24,40,0.9))] text-6xl font-display tracking-[-0.05em] text-[#f5e6bf]">
                      {getInitials(selectedMember.name)}
                    </div>
                  )}
                  <div>
                    <div>
                      <p className={labelClass}>{selectedMember.role}</p>
                      <Dialog.Title
                        className={`${headingClass} mt-3 text-5xl sm:text-6xl`}
                      >
                        {selectedMember.name}
                      </Dialog.Title>
                    </div>
                    <Dialog.Description className={bodyClass}>
                      {selectedMember.bio}
                    </Dialog.Description>
                    <TeamLinks links={selectedMember.links} />
                  </div>
                </div>
              </div>
            ) : null}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
