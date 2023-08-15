function skillsMember()  {
    var $skillsMember = $('.skills-member');
    $skillsMember.each(function () {
        var $this = $(this),
            $progressBar = $this.find('.progress-bar'),
            $percent = $this.find('.percent'),
            dataPercent = parseInt($percent.data('percent'));

        $progressBar.css('width', dataPercent + '%');
        $percent.text(dataPercent + '%');
    });
}