import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import {
  revalidate,
  FlushedChunks,
  flushChunks,
} from "@module-federation/nextjs-mf/utils";

class MyDocument extends Document {
  declare props: any;
  static async getInitialProps(ctx: any) {
    if (
      process.env.NODE_ENV === "development" &&
      !ctx?.req?.url?.includes("_next")
    ) {
      await revalidate().then((shouldReload: boolean) => {
        if (shouldReload) {
          ctx.res.writeHead(302, { Location: ctx.req.url });
          ctx.res.end();
        }
      });
    } else {
      ctx?.res?.on("finish", () => {
        revalidate();
      });
    }

    const chunks = await flushChunks();

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      chunks,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex" />
          <FlushedChunks chunks={this.props.chunks} />
        </Head>

        <body className="bg-background-grey">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
