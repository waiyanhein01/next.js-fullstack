# React `useActionState` Hook (Burmese Guide)

React 19 နှင့်အထက်တွင် အသုံးပြုနိုင်သော `useActionState` hook အကြောင်း အကျဉ်းချုပ် မှတ်စု။

> **မှတ်ချက်:** ယခင် React Canary version များတွင် `useFormState` ဟု ခေါ်ဝေါ်ခဲ့သော်လည်း ယခုအခါ `useActionState` ဟု ပြောင်းလဲသတ်မှတ်ထားသည်။

---

## ၁။ အဓိက ရည်ရွယ်ချက် (Purpose)

Form တစ်ခု submit လုပ်လိုက်သည့်အခါ Server Action (သို့မဟုတ် Async Function) မှ ပြန်လာသော အဖြေ (Result) ပေါ်မူတည်၍ UI ကို update လုပ်ရန် အသုံးပြုသည်။

အဓိက ဖြေရှင်းပေးသော ပြဿနာများ -

- **Loading State:** Data ပို့နေစဉ် Loading ပြရန် (`isPending`).
- **Response Handling:** Server မှ ပြန်လာသော Error သို့မဟုတ် Success message များကို ပြရန် (`state`).

---

## ၂။ အသုံးပြုပုံ (Syntax)

```javascript
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);
```

````

### Parameters (ထည့်ပေးရမည့်အရာများ)

1. **`fn`**: Form submit လုပ်လျှင် အလုပ်လုပ်မည့် Function (Action)။
2. **`initialState`**: စစချင်းသတ်မှတ်ထားမည့် တန်ဖိုး (ဥပမာ - `null` သို့မဟုတ် `{ error: null }`)။
3. **`permalink`** (Optional): ပုံမှန်အားဖြင့် မလိုအပ်ပါ (React Server Components အတွက် အဓိကသုံးသည်)။

### Return Values (ပြန်ရမည့်အရာများ)

1. **`state`**: Action function မှ return ပြန်လိုက်သော နောက်ဆုံးရလဒ်။
2. **`formAction`**: `<form>` သို့မဟုတ် `<button>` ၏ `action` prop တွင် ထည့်ပေးရမည့် function။
3. **`isPending`**: Action အလုပ်လုပ်နေဆဲ ဟုတ်/မဟုတ် ပြောပြသည့် Boolean (`true` = loading)။

---

## ၃။ လက်တွေ့ ဥပမာ (Code Example)

အောက်ပါဥပမာသည် အသုံးပြုသူမှ နာမည်ပြောင်းလဲခြင်း (Update Name) ကို လုပ်ဆောင်ပုံဖြစ်သည်။

```javascript
import { useActionState } from "react";

// 1. Action Function (Server or Async logic)
// prevState = ယခင် state အဟောင်း
// formData = form မှ ပို့လိုက်သော data များ
async function updateNameAction(prevState, formData) {
  const name = formData.get("username");

  // Fake delay (Loading ပြတာမြင်ရအောင်)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!name) {
    return { error: "နာမည်ထည့်ရန် လိုအပ်ပါသည်!", success: null };
  }

  // Database update လုပ်ပြီးပြီ ဆိုပါစို့
  return { error: null, success: `နာမည်ကို "${name}" ဟု ပြောင်းလဲပြီးပါပြီ။` };
}

// 2. Component
export default function ChangeNameForm() {
  const [state, formAction, isPending] = useActionState(updateNameAction, null);

  return (
    <form action={formAction} className="rounded border p-4">
      <h3>နာမည်ပြောင်းရန်</h3>

      <input
        type="text"
        name="username"
        placeholder="နာမည်အသစ်ရိုက်ထည့်ပါ"
        className="mr-2 border p-2"
      />

      {/* isPending ဖြစ်နေရင် ခလုတ်ကို နှိပ်မရအောင် ပိတ်ထားမည် */}
      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-blue-500 p-2 text-white disabled:bg-gray-400"
      >
        {isPending ? "ပြောင်းလဲနေသည်..." : "ပြောင်းမည်"}
      </button>

      {/* Result ပြခြင်း */}
      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
    </form>
  );
}
```

---

## ၄။ ဘာကြောင့် သုံးသင့်တာလဲ (Benefits)

- **No Manual Loading State:** `useState` သုံးပြီး `setLoading(true)` / `setLoading(false)` လိုက်ရေးစရာ မလိုတော့ပါ။ `isPending` က အလိုအလျောက် လုပ်ပေးသည်။
- **Automatic State Updates:** Server မှ result ပြန်လာတာနဲ့ `state` variable ထဲကို တန်းရောက်လာသည့်အတွက် error message များ ပြရတာ လွယ်ကူသည်။
- **Progressive Enhancement:** JavaScript မပွင့်ထားသော Browser များတွင်ပါ အလုပ်လုပ်နိုင်အောင် Form များကို တည်ဆောက်ရာတွင် အဆင်ပြေသည်။

---

## ၅။ လိုအပ်ချက်များ (Requirements)

- **React Version:** React 19 (သို့မဟုတ် Canary versions) လိုအပ်ပါသည်။
- **Environment:** Next.js App Router ကဲ့သို့သော Framework များနှင့် တွဲသုံးလျှင် Server Actions အတွက် အထူးသင့်လျော်သည်။
````
