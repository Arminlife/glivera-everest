export default class HeaderMenu {
	constructor(el) {
		this.$el = $(el);
		this.$trigger = this.$el.find('.menu_trigger');
		this.$body = $('body');
		this.init();
	}

	init() {
		const { $trigger, $body } = this;
		$trigger.on('click', () => {
			if ($body.hasClass('menu_open')) {
				$body.removeClass('menu_open');
				$trigger.removeClass('active_mod');
			} else {
				$body.addClass('menu_open');
				$trigger.addClass('active_mod');
			}
		});
	}
}
