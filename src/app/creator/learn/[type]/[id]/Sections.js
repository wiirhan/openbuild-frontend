// import { useInView } from 'react-intersection-observer';

export function Sections({ section, change, data, type, id }) {
  const { title, content } = section;

  // const rootEle = document.getElementById('creator')

  // const { ref } = useInView({
  //   threshold: 1,
  //   onChange: (inView, entry) => {
  //     if (inView) {
  //       setVisibleSection(entry.target.id);
  //     }
  //   }
  // });

  const RenderDom = content
  // ref={ref} 
  return (
    <section id={title} className="pb-[100px] mb-[100px] border-b border-gray-600">
      <RenderDom change={change} data={data} type={type} id={id}  />
    </section>
  );
}
