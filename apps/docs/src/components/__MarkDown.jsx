import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function MarkDown({ children, del, ...props }) {
	if (del) {
		const reg = new RegExp(del, "gm");
		children = children.replace(reg, "");
	}
	return (
		<ReactMarkdown remarkPlugins={[remarkHtml, remarkBreaks, remarkGfm]} rehypePlugins={[rehypeRaw]} {...props}>
			{children}
		</ReactMarkdown>
	);
}
export default MarkDown;
