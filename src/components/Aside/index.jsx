import logo from '../../assets/logo.svg'

export const Aside = () => {
  return (
    <aside className="bg-neutral-header flex flex-col max-w-70.5 min-h-screen gap-14 px-10 py-20">
      <img src={logo} alt="Logo Poupapp" />
      <p className='text-neutral-text leading-[120%] text-[13px] text-center'>
        Desenvolvido por Alura. Projeto fictício sem fins comerciais.
      </p>
    </aside>
  );
};
