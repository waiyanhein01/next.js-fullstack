ကောင်းပါပြီ။ `useActionState` နဲ့ အမြဲလိုလို တွဲသုံးလေ့ရှိတဲ့ **`useFormStatus`** အကြောင်းကိုပါ Note ထဲမှာ ဆက်ပြီး သိမ်းထားလို့ရအောင် `README.md` format နဲ့ ထပ်မံ ပြင်ဆင်ပေးလိုက်ပါတယ်။

ဒါကို `useActionState` note ရဲ့ အောက်မှာ ဆက်ထည့်လိုက်ရင် ပြည့်စုံသွားပါလိမ့်မယ်။

````markdown
---

# React `useFormStatus` Hook (Burmese Guide)

`useActionState` နှင့် တွဲဖက်အသုံးပြုလေ့ရှိပြီး၊ Form ၏ လက်ရှိအခြေအနေ (Status) ကို Child Components များမှ လှမ်းယူသုံးနိုင်ရန် ပြုလုပ်ပေးသော Hook ဖြစ်သည်။

## ၁။ အဓိက ရည်ရွယ်ချက် (Purpose)

* **Prop Drilling မလိုပါ:** `isPending` (Loading state) ကို Parent Component မှ Button Component ဆီသို့ props အနေဖြင့် ပို့ပေးစရာမလိုဘဲ၊ Button ထဲတွင် တိုက်ရိုက် ခေါ်သုံးနိုင်သည်။
* **Reusable Components:** Submit Button များကို သီးသန့် Component ခွဲထုတ်ရာတွင် အလွန်အသုံးဝင်သည်။

> **သတိပြုရန်:** `useFormStatus` ကို `<form>` tag ရှိသော Component တူတူထဲတွင် ခေါ်သုံး၍ မရပါ။ `<form>` ၏ **အတွင်း (Child)** တွင်ရှိသော Component များထဲတွင်သာ ခေါ်သုံးရပါမည်။

---

## ၂။ အသုံးပြုပုံ (Syntax)

```javascript
const { pending, data, method, action } = useFormStatus();
```
````

### Return Values (ပြန်ရမည့်အရာများ)

1. **`pending`**: Form သည် submit လုပ်နေဆဲ (Loading) ဖြစ်နေပါက `true` ပြပါမည်။
2. **`data`**: Submit လုပ်လိုက်သော `FormData` အချက်အလက်များ။
3. **`method`**: HTTP method (ဥပမာ - `post`, `get`)။
4. **`action`**: Form ၏ action function ရည်ညွှန်းချက်။

_(အသုံးအများဆုံးမှာ `pending` ဖြစ်သည်)_

---

## ၃။ လက်တွေ့ ဥပမာ (Code Example)

ဤဥပမာတွင် `SubmitButton` ကို သီးသန့် Component ခွဲထုတ်ပြီး `useFormStatus` ဖြင့် Loading state ကို ထိန်းချုပ်ထားသည်။

```javascript
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

// 1. Child Component (Button)
// ဒီ Component က Form အောက်မှာ နေမှာဖြစ်လို့ useFormStatus သုံးလို့ရတယ်။
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded bg-blue-600 px-4 py-2 text-white"
    >
      {pending ? "သိမ်းဆည်းနေသည်..." : "သိမ်းဆည်းမည်"}
    </button>
  );
}

// 2. Parent Component (Form)
export default function UserForm() {
  const [state, formAction] = useActionState(saveUserAction, null);

  return (
    <form action={formAction} className="border p-4">
      <h3 className="mb-2">အချက်အလက်ဖြည့်ရန်</h3>
      <input
        name="email"
        type="email"
        required
        className="mb-2 block border p-2"
      />

      {/* Button ကို Component ခွဲပြီး ထည့်သုံးထားခြင်း */}
      <SubmitButton />

      {state?.message && <p className="mt-2">{state.message}</p>}
    </form>
  );
}

// Action Function (Dummy)
async function saveUserAction(prevState, formData) {
  await new Promise((res) => setTimeout(res, 1000)); // Fake Delay
  return { message: "အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ။" };
}
```

---

## ၄။ ဘာကြောင့် သုံးသင့်တာလဲ (Key Benefit)

ပုံမှန် `useActionState` သာသုံးလျှင် `isPending` ကို button ဆီသို့ `props` အနေဖြင့် ပို့ပေးရသည်။

- **Before:** `<MyButton isLoading={isPending} />`
- **After (with useFormStatus):** `<MyButton />` (Button ထဲတွင် `pending` ကို သူ့ဘာသာသူ ယူသုံးသွားမည်)။
