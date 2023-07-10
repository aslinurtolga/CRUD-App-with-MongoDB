import EditTopicForm from "@/components/EditTopicForm";
import { errorToJSON } from "next/dist/server/render";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://loclhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
}
