import circularLayoutHelper from './circularLayoutHelper';

export default function (ecModel) {
    ecModel.eachSeriesByType('graph', function (seriesModel) {
        if (seriesModel.get('layout') === 'circular') {
            circularLayoutHelper(seriesModel);
        }
    });
}
