# Learning Next.js started 9 Oct 2025

## Special files

- page.tsx
- layout.tsx
- template.tsx
- not-found.tsx
- loading.tsx

## 1. Routing

- Nested Routes
- Dynamic Routes
- Nested Dynamic Routes
- Catch all Segments or Catch all Routes

  If u want to do dynamically routes `ex. docs/react/hooks` this url will be come dynamically so if u want to control that use catch-all route segment you can see `docs` folder in app.

  Catch all Segments sign like that `[...slug]` in that way if u enter `/docs` in url that will show 404 not found because this docs file is not have own `page.tsx`. So we are using optional catch all segment.

  Optional Catch all Segments sign like that `[[...slug]]`

- not-found

In this `not-found.tsx` has no access props, if you want to use some url pathname you can use `usePathname()`.

## 2. Layout

- Nested Layout

If u want to do share ui like header ui want to be use both product and product detail you do `layout.tsx` under product folder.

```bash
sample in product folder in app
```

## 3. File-colocation

This is mean a folder have own page.tsx if you create other name this folder won't be run like (`product.tsx` instand of `page.tsx`).

## 4. Private Folder

This is use for split code, ui logic and other component what you want. This folder is like that (\_lib or \_folder name).But we are use in `components folder` for split code.

## 5. Params and SearchParams

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

## 6. Route Groups

This is for group of routes (eg. (auth) and (root)) if you don't want header and footer in auth routes you can create a routes with groups.Root routes group must have `layout.tsx` and `page.tsx` if you want to customize layout of ui.

### Multiple RootLayout

This layout render with `route group` and if you use routes group, every single group has `RootLayout(layout.tsx)` but `page.tsx` must has one. Multiple layout must has html structure.

#### Noted - If you use multiple layout page will be refresh.

Sample Usage `(auth)` and `(root)`

## 7. Part of "use client" in server component

This Carousel component will be render in server components.

```
"use client";

import { Carousel } from "acme-carousel";

export default Carousel;
```

## 8. Streaming and Prefetching

- Page level streaming
- Component level streaming
- Prefetching

### Prefetching

This is normally build in Tag like `LINK`. Next.js will be give you `Login` button for ``login.rsc` "RSC" means "React Server Component".

#### Noted : You can see that code in `dashboard` folder.

## 9. Data Fetching

- In Server Component
- In Client Component

### Data Fetching in server component

- Fetch API (Using Next as Frontend)
- Prisma ORM (Using Next as FullStack)

- Fetch API (Using Next as Frontend)

  #### Dynamic Rendering in Server Side(SSR)

  This method next.js will cache automatically so if your web site or app run every time you can use dynamically with this Parameter `cache: "no-cache",`

  #### Static Side or ISR Rendering in Server Side(SSR)
  - Time base revalidation
  - On-demand revalidation
    - revalidateTag approach with tag["posts"]
    - revalidatePath(no need)

```
next: {
      // Time-base revalidation
      revalidate: 60,

      // On-demand revalidation
      tag: ["posts" or "something you want to cache a name"]
      }
```

- If you use that approach you must be match use with this `revalidateTag`.
- `revalidatePath` can use like this approach.

##### Noted : if u want to know about above rendering detail u can see in `RENDERING.md` and `blog.page & action`.

- Prisma ORM (Using Next as FullStack)

Direct fetch from data base with `action`

### Data Fetching in client component

- React `use` hook
- Tanstack query or RTK query or SWR

##### React `use` hook

If you want to render your server component in client component use `use` that help you render with the best performance in client side. Prepare data server doing in next.js side and after that give to react hook like `use` and then you must use `Suspense`.

```
export const dynamic = "force-dynamic"

```

##### Tanstack query or RTK query or SWR

`NEXT_PUBLIC_NAME ` next.js will allow to accept env variable like this if you are fetching in client component.

```
// use fetch API
useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${postId}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch post details 😂");
        }

        const postDetail = await res.json();
        setPost(postDetail);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostDetails();
  }, []);

```

```
// use axios
useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await api.get(`/posts/${postId}`);
        const postDetail = res.data;

        if (res.status !== 200) {
          throw new Error("Failed to fetch post details 😂");
        }

        setPost(postDetail);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostDetails();
  }, []);
```

## 10. Navigating Programmatically

`useRouter()`
