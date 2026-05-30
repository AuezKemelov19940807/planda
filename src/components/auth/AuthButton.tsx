interface Props {
  text: string;
  loading?: boolean;
}

export default function AuthButton({ text, loading }: Props) {
  return (
    <button
      className="text-sm font-bold text-white bg-green py-1.5 rounded-lg cursor-pointer  h-12 flex items-center justify-center"
      type="submit"
      disabled={loading}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
