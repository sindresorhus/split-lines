type Options = {
	/**
	 * Preserve the line separator at the end of every line, except the last line, which will never contain one.
	 * @default false
	 */
	preserveNewlines?: boolean;
}

export default function splitLines (str: string, options?: Options): string[];
