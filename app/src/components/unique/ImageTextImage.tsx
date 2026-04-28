interface Row {
  title: string;
  text: string;
  imageLeft: string;
  imageRight: string;
  imageDescriptionLeft: string;
  imageDescriptionRight: string;
}

interface ImageTextImageRowProps {
  row: Row;
}

const ImageTextImageRow = ({
  row,
}: React.PropsWithChildren<ImageTextImageRowProps>) => {
  return (
    <div className="size-full flex flex-row justify-center-safe items-center gap-24">
      <div className="relative w-auto h-100 flex items-center justify-center">
        <img
          src={row.imageLeft}
          className="max-w-none h-[100%] opacity-0 lg:opacity-25"
          alt={row.imageDescriptionLeft}
        />
        <div className="absolute font-sans inset-0 size-full flex flex-col justify-center items-center text-black text-xl px-[10%] text-center gap-5">
          <div className="font-bold">{row.title}</div>
          <p>{row.text}</p>
        </div>
      </div>
      <img
        src={row.imageRight}
        className="h-100 rounded-xl opacity-20 lg:opacity-100 absolute lg:relative"
        alt={row.imageDescriptionRight}
      ></img>
    </div>
  );
};

interface ImageTextImageProps extends React.ComponentProps<'section'> {
  rows: Row[];
}

const ImageTextImage = ({
  rows,
  className,
}: React.PropsWithChildren<ImageTextImageProps>) => {
  return (
    <section
      className={
        'bg-white relative w-full h-auto flex flex-col gap-16 overflow-hidden ' +
        className
      }
    >
      {rows.map((row) => {
        return <ImageTextImageRow row={row} />;
      })}
    </section>
  );
};

export default ImageTextImage;
