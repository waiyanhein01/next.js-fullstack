"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPostAction, State } from "@/lib/actions/posts";
import { useActionState } from "react";
import Link from "next/link";

const CreatePostForm = () => {
  //authorId
  const authorId = 1;
  const createPostActionWithAuthorId = createPostAction.bind(null, authorId);

  const initialState: State = { errors: {}, message: null };
  const [state, formAction, pending] = useActionState(
    createPostActionWithAuthorId,
    initialState,
  );

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Create Post Form</FieldLegend>
            <FieldDescription>
              Please fill in the details below to create a new post.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Post Title
                </FieldLabel>
                <Input
                  name="title"
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>

              {state?.errors?.title && (
                <FieldDescription className=" text-xs text-red-500">
                  {state.errors.title}
                </FieldDescription>
              )}

              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Post Content
                </FieldLabel>
                <Textarea
                  name="content"
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>

              {state?.errors?.content && (
                <FieldDescription className=" text-xs text-red-500">
                  {state.errors.content}
                </FieldDescription>
              )}

              <Field orientation="horizontal">
                <Checkbox
                  name="published"
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  This post will be published
                </FieldLabel>
              </Field>

              <FieldDescription className=" text-xs text-red-500">
                {state.message && state.message}
              </FieldDescription>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit" disabled={pending}>
              {pending ? "Submitting" : "Submit"}
            </Button>
            <Link href="/posts">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default CreatePostForm;
