import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
            code(props) {
                const { children, className } = props;
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                    <SyntaxHighlighter 
                        PreTag="div"
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        style={coldarkDark}
                    />
                ) : (
                    <code className={className}>{children}</code>
                )
            }
        }}
    >
      {content}
    </ReactMarkdown>
  );
}