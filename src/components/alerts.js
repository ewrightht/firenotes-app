import Swal from 'sweetalert2';

export const errorAlert = (message) => {
	Swal.fire({
		icon: 'error',
		title: message,
		toast: true,
		position: 'top',
		timerProgressBar: true,
		showConfirmButton: false,
		timer: 4000,
	});
};

export const successMessage = (message) => {
	Swal.fire({
		icon: 'success',
		title: message,
		position: 'center',
	});
};

export const openAddNote = () => {
	Swal.fire({
		title: 'Add new note',
		html: `<input id="swal-input1" class="swal2-input" placeholder="Note title">
			<textarea id="text" class="swal2-textarea textarea" placeholder="Note description"></textarea>
      <input type="color">`,
		confirmButtonColor: '#00b894',
	});
};
