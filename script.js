class ResultCalculator {
    constructor() {
        this.totalSuccesses = 0;
        this.totalFailures = 0;
        this.successfullResults = $("#successfullResults");
        this.unsuccessfullResults = $("#unsuccessfullResults");
        this.calculateButton = $("#calculateButton");
        
        this.calculateButton.on('click', () => this.calculate());
    }

    calculate() {
        this.calculateButton.text('Calculating...');
        this.calculateButton.prop('disabled', true);

        setTimeout(() => {
            const minValue = parseInt($('#minValue').val());
            const maxValue = parseInt($('#maxValue').val());
            const successRate = parseFloat($('#successRate').val());
            const trialCount = parseInt($('#trialCount').val());
            const totalSuccessesSpan = $('#totalSuccesses');
            const totalFailuresSpan = $('#totalFailures');
            
            let closeResultDetails = trialCount > 10000 ? 1 : 0;

            for (let i = 0; i < trialCount; i++) {
                const dateTime = new Date().toLocaleString();
                const randomNumber = (Math.random() * (maxValue - minValue)) + minValue;
                const result = randomNumber <= successRate ? 'Success' : 'Failure';

                this.resultDetails(dateTime, i, result, randomNumber, closeResultDetails);
            }

            totalSuccessesSpan.text(this.totalSuccesses);
            totalFailuresSpan.text(this.totalFailures);

            this.calculateButton.text('Calculate');
            this.calculateButton.prop('disabled', false);
        });
    }

    resultDetails(dateTime, i, result, randomNumber, closeResultDetails) {
        result === 'Success' ? this.addSuccess(dateTime, i, randomNumber) : this.addFailure(dateTime, i, randomNumber, closeResultDetails);
    }
    
    addSuccess(dateTime, i, randomNumber) {
        this.successfullResults.val(`${this.successfullResults.val() || ''}${dateTime} - Trial ${i + 1}: Success - (${randomNumber})\n`);
        this.totalSuccesses++;
    }
    
    addFailure(dateTime, i, randomNumber, closeResultDetails) {
        if (closeResultDetails === 0) {
            this.unsuccessfullResults.val(`${this.unsuccessfullResults.val() || ''}${dateTime} - Trial ${i + 1}: Failure - (${randomNumber})\n`);
        }
        this.totalFailures++;
    }
    
}

$(document).ready(() => {
    new ResultCalculator();
});