export default function Signup() {
  return (
    <section>
      <div>Sign up</div>
      <div>Choose one of the following signup methods</div>
      <div>[Twitter button][Facebook button][Google button]</div>
      <div>Or sign up using your email address</div>
      <form>
        <input placeholder="email adress" />
        <input placeholder="password" />
        <button>{`Create My Account >`} </button>
      </form>
    </section>
  );
}
