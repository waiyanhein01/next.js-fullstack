import CreatePostForm from "@/components/posts/CreatePostForm";

const CreatePostPage = async () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;
