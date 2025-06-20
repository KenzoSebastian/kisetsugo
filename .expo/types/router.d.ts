/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/pages/loading`; params?: Router.UnknownInputParams; } | { pathname: `/pages/main`; params?: Router.UnknownInputParams; } | { pathname: `/pages/menu`; params?: Router.UnknownInputParams; } | { pathname: `/pages/haru/funFact`; params?: Router.UnknownInputParams; } | { pathname: `/pages/haru/main`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/loading`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/main`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/menu`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/haru/funFact`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/haru/main`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/pages/loading${`?${string}` | `#${string}` | ''}` | `/pages/main${`?${string}` | `#${string}` | ''}` | `/pages/menu${`?${string}` | `#${string}` | ''}` | `/pages/haru/funFact${`?${string}` | `#${string}` | ''}` | `/pages/haru/main${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/pages/loading`; params?: Router.UnknownInputParams; } | { pathname: `/pages/main`; params?: Router.UnknownInputParams; } | { pathname: `/pages/menu`; params?: Router.UnknownInputParams; } | { pathname: `/pages/haru/funFact`; params?: Router.UnknownInputParams; } | { pathname: `/pages/haru/main`; params?: Router.UnknownInputParams; };
    }
  }
}
