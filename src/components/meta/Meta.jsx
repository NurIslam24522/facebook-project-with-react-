import { Helmet } from "react-helmet";

const Meta = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png"
        type="image/x-icon"
      />
    </Helmet>
  );
};

export default Meta;
