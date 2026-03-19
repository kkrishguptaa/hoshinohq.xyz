import { Accordion } from "@base-ui/react/accordion";
import type { FAQItem } from "../content/site";
import { bodyClass, headingClass, labelClass, sectionClass } from "../lib/ui";

type FAQProps = {
	items: FAQItem[];
};

function toValue(question: string) {
	return question.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-");
}

export function FAQ({ items }: FAQProps) {
	return (
		<section className={sectionClass} id="faq">
			<div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-end">
				<div className="space-y-4">
					<p className={labelClass}>FAQ</p>
					<h2 className={`${headingClass} text-5xl sm:text-6xl`}>
						Everything the next builder usually asks first.
					</h2>
				</div>
			</div>
			<Accordion.Root
				className="grid gap-3"
				defaultValue={[toValue(items[0]?.question ?? "")]}
			>
				{items.map((item) => (
					<Accordion.Item
						className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0b1828]/82 backdrop-blur-xl"
						key={item.question}
						value={toValue(item.question)}
					>
						<Accordion.Header>
							<Accordion.Trigger className="group flex w-full items-center justify-between px-5 py-5 text-left text-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#f5e6bf] sm:px-6">
								<span>{item.question}</span>
								<span
									className="text-2xl text-[#e7cc8f] transition group-data-[open]:rotate-45"
									aria-hidden="true"
								>
									+
								</span>
							</Accordion.Trigger>
						</Accordion.Header>
						<Accordion.Panel className="px-5 pb-5 sm:px-6 sm:pb-6">
							<p className={bodyClass}>{item.answer}</p>
						</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion.Root>
		</section>
	);
}
