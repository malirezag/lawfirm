import BackButton from "../../ui/BackButton";
import UpdateNameForm from "../../ui/UpdateNameForm";
import UpdatePasswordForm from "../../ui/UpdatePasswordForm";

function UpdateAccount() {
  return (
    <div>
      <BackButton to={"/home"} />
      <div
        className="flex flex-col lg:flex-row gap-8 justify-center
    md:h-screen items-center py-8  bg-gray-100  "
      >
        <UpdateNameForm />
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

export default UpdateAccount;
