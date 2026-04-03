/**
 * Bone DNA Triage Tool - Scaler Parameters & Optimal Thresholds
 * Optimized for Hybrid XGBoost Logic (n=5)
 * Center for DNA Identification (CDI), IB, VAST
 * Updated: April 2026
 */

// 1. Scaler Parameters (Derived from StandardScaler fitted on full dataset)
const scaler_means = [0.18177083333333335, 0.19453125000000002, 0.11640625, 0.032031250000000004, 0.1963541666666667, 0.23697916666666666, 0.11406250000000001];
const scaler_scales = [0.07810242729458255, 0.07660633311572548, 0.05004270637103374, 0.05131133588305967, 0.07781012937040323, 0.07456289000549954, 0.05036487956651937];

// 2. Optimal Probability Thresholds (Sensitivity >= 85%)
const THRESHOLDS = {
    "XGBoost (Tuned)": 0.2300,
    "Support Vector Machine": 0.3019,
    "Random Forest": 0.2653,
    "Logistic Regression": 0.2814
};

/**
 * 3. Hybrid Heuristic Penalty (n)
 * This constant defines the maximum allowed number of severely degraded morphological features (>= 0.25).
 * Based on benchmark analysis, n=5 optimizes specificity for XGBoost without compromising sensitivity.
 */
const HEURISTIC_N = 5;