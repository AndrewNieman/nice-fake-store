import { Announcement } from "../../components/announcement/announcement";
import { PromoContainer } from "../../components/promos/promocontainer";
import { Footer } from "../../components/footer/footer";

export const Home = () => {
  return (
    <>
      <Announcement />
      <h1>Midland Carbide Store</h1>
      <h2>Fufilling all your needs</h2>

      <PromoContainer />
      <div className="home">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac nisi a mauris ultrices viverra id finibus odio. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed sollicitudin, ex id mollis
          vehicula, mauris tortor tristique tellus, eget porta quam massa non
          sapien. Aliquam erat volutpat.
        </p>

        <p>
          Praesent at commodo sem. Curabitur pretium volutpat nisi, ut mattis
          sem vulputate id. Etiam eleifend eros eget velit facilisis malesuada.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Donec sollicitudin, neque non blandit
          aliquet, sem dolor iaculis lacus, eget tincidunt lorem purus
          condimentum nibh. Sed mi lorem, sagittis blandit suscipit eget,
          eleifend ac lectus. Quisque et posuere nisl. Fusce luctus ultricies
          tortor at consectetur. Quisque in dignissim dolor. Nulla ac diam a
          orci euismod vulputate nec id ipsum.
        </p>

        <p>
          In aliquam ullamcorper neque, vitae aliquam lorem imperdiet sit amet.
          Sed tincidunt ligula ut leo mattis consectetur. Integer fringilla
          bibendum posuere. Fusce nisi nunc, vulputate in dictum at, ornare quis
          ligula. Vestibulum sit amet commodo lorem. Donec sapien elit, interdum
          at mauris eu, faucibus maximus massa. Nullam tristique lorem odio, at
          elementum enim vestibulum quis. In ut est a lorem porta aliquam.
          Vestibulum placerat sed nibh sed faucibus. Morbi pellentesque erat id
          velit pulvinar, eu ullamcorper arcu pulvinar. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam
          ac tempus risus. Donec porta luctus nisi, ultricies placerat nibh
          faucibus sed. Morbi convallis purus quis lacus porta vestibulum. Donec
          sed velit fermentum, luctus enim ac, ultrices enim.
        </p>

        <p>
          Morbi in fringilla nibh, a pretium risus. Aenean interdum elit ut mi
          tincidunt semper. Fusce dapibus in massa sed congue. Praesent ac
          tincidunt augue. Nam consequat pulvinar lacus, nec dapibus enim tempor
          vel. Praesent a quam blandit, vehicula tellus ut, accumsan orci. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Sed lorem tellus, tincidunt ut quam ut, elementum
          lobortis erat. Sed et laoreet magna. Vestibulum id nunc sed nisl
          faucibus dignissim. Vivamus ornare scelerisque mi eu posuere.
          Phasellus ac nunc sed justo vulputate efficitur. Nunc scelerisque,
          elit sed rhoncus porta, ante ligula dapibus ante, eget commodo diam
          urna eget eros. Sed condimentum, lorem in aliquet luctus, sapien eros
          tempus ipsum, sed placerat justo lectus sed justo.
        </p>

        <p>
          Nunc non augue cursus, lacinia urna ornare, dictum diam. Maecenas nec
          lorem suscipit, condimentum lorem eu, sodales dolor. Aliquam in
          gravida quam, et ornare massa. Proin vulputate imperdiet augue vel
          pulvinar. Curabitur pharetra dolor eu odio fermentum viverra. Proin
          rhoncus velit neque, eu feugiat nulla interdum ac. Ut nibh mi, semper
          non ante eu, mattis commodo odio. In sit amet eros eu dui suscipit
          pellentesque eget nec mi. Donec non metus rhoncus, tempor lorem in,
          rhoncus sem. Donec malesuada tortor sit amet semper tincidunt. Duis
          libero neque, bibendum vitae dui ullamcorper, suscipit sodales sapien.
        </p>
        <p>
          Etiam turpis ex, fringilla vitae turpis ac, tristique lacinia neque.
          Sed cursus laoreet felis, et venenatis arcu egestas sit amet.
          Phasellus sed sem id nisi euismod hendrerit eu id justo. Sed ac ipsum
          eget lectus fringilla sagittis. Donec condimentum eget leo id
          imperdiet. Ut ac lobortis libero. Ut ut magna enim. Integer suscipit,
          tortor non tincidunt tristique, sem nunc vehicula ante, sed dictum
          mauris nunc in dui.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};
