# Learning Next.js started 9 Oct 2025

## Special files

- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx

## Routing

- Nested Routes
- Dynamic Routes
- Nested Dynamic Routes
- Catch all Segments or Catch all Routes

  If u want to do dynamically routes `ex. docs/react/hooks` this url will be come dynamically so if u want to control that use catch-all route segment you can see `docs` folder in app.

  Catch all Segments sign like that `[...slug]` in that way if u enter `/docs` in url that will show 404 not found because this docs file is not have own `page.tsx`. So we are using optional catch all segment.

  Optional Catch all Segments sign like that `[[...slug]]`

- not-found

In this `not-found.tsx` has no access props, if you want to use some url pathname you can use `usePathname()`.

## Layout

- Nested Layout

If u want to do share ui like header ui want to be use both product and product detail you do `layout.tsx` under product folder.

```bash
sample in product folder in app
```

## File-colocation

This is mean a folder have own page.tsx if you create other name this folder won't be run like (`product.tsx` instand of `page.tsx`).

## Private Folder

This is use for split code, ui logic and other component what you want. This folder is like that (\_lib or \_folder name).But we are use in `components folder` for split code.

## Params and SearchParams

### Params

For giving a URL,

`params` is a promise that resolves to an object containg the dynamic routes parameters(like id)

`async/await` can not read in "use client" so if you want to do like async process you can use `use()` special function of react and `useParams()` of Next.js build in function.

### Params Usage/Examples

```javascript

// normal way
const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  return <div>ProductDetailPage - {productId}</div>;
};

export default ProductDetailPage;
```

```javascript

"use client";

import { use } from "react";

// use "use()"
const ProductDetailPage = ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = use(params);
  return <div>ProductDetailPage - {productId}</div>;
};

export default ProductDetailPage;
```

```javascript

"use client";

import { useParams } from "next/navigation";

// use "useParams()"
const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  return <div>ProductDetailPage - {productId}</div>;
};

export default ProductDetailPage;
```

### SearchParams

`searchParams` is a promise that resolves to an object containing the query parameters(like filters and sorting)

### searchParams Usage/Examples

You can see searchParams how to use in server side and client side below the code.These code look like similar but rendering is not same.

```javascript
// server component
const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { page = "1", category = "", query = "" } = await searchParams;
  return (
    <div className="">
      <h1 className="">ProductPage</h1>
      <p>page: {page}</p>
      <p>category: {category}</p>
      <p>query: {query}</p>
    </div>
  );
};

export default ProductPage;
```

```javascript
// client component with use()
"use client";

import { use } from "react";

const ProductPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { page = "1", category = "", query = "" } = use(searchParams);
  return (
    <div className="">
      <h1 className="">ProductPage</h1>
      <p>page: {page}</p>
      <p>category: {category}</p>
      <p>query: {query}</p>
    </div>
  );
};

export default ProductPage;
```

```javascript
// client component with useSearchParams()
"use client";

import { useSearchParams } from "next/navigation";

const ProductPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const category = searchParams.get("category") || "";
  const query = searchParams.get("query") || "";
  return (
    <div className="">
      <h1 className="">ProductPage</h1>
      <p>page: {page}</p>
      <p>category: {category}</p>
      <p>query: {query}</p>
    </div>
  );
};

export default ProductPage;
```

#### Noted : While `page.tsx` has access to both params and searchParams, `layout.tsx` only has access to params

## Route Groups

This is for group of routes (eg. (auth) and (root)) if you don't want header and footer in auth routes you can create a routes with groups.Root routes group must have `layout.tsx` and `page.tsx` if you want to customize layout of ui.

### Multiple RootLayout

This layout render with `route group` and if you use routes group, every single group has `RootLayout(layout.tsx)` but `page.tsx` must has one. Multiple layout must has html structure.

#### Noted - If you use multiple layout page will be refresh.

Sample Usage `(auth)` and `(root)`

## Part of "use client" in server component

This Carousel component will be render in server components.

```
"use client";

import { Carousel } from "acme-carousel";

export default Carousel;
```

## Streaming and Prefetching

- Page level streaming
- Component level streaming
- Prefetching

### Prefetching

This is normally build in Tag like `LINK`. Next.js will be give you `Login` button for ``login.rsc` "RSC" means "React Server Component".

#### Noted : You can see that code in `dashboard` folder.

## Data Fetching

- In Server Component
- In Client Component

### Data Fetching in server component

- Fetch API (Using Next as Frontend)

  #### Dynamic Rendering in Server Side(SSR)

  This method next.js will cache automatically so if your web site or app run every time you can use dynamically with this Parameter `cache: "no-cache",`

  #### Static Side or ISR Rendering in Server Side(SSR)

```
next: {
      revalidate: 60, // Time-base revalidation
      tag: ["posts" or "something you want to cache a name"] // On-demand revalidation
      }
```

- Prisma ORM (Using Next as FullStack)

## Navigating Programmatically

`useRouter()`
