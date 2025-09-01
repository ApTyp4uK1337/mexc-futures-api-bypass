document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('orderForm');
  const responseTimeBox = document.getElementById('responseTime');
  const consoleBox = document.getElementById('console');
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  const tooltips = document.querySelectorAll('.tooltip');
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Improved tooltip positioning logic
  function positionTooltip(tooltip, content) {
    if (content.querySelector('img')) {
      content.style.maxWidth = 'none';
      content.style.width = 'auto';
    }

    const triggerRect = tooltip.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const margin = 10;

    // Reset positioning
    content.style.left = '';
    content.style.right = '';
    content.style.top = '';
    content.style.bottom = '';
    content.style.transform = '';

    // Calculate available space
    const space = {
      top: triggerRect.top - margin,
      right: viewportWidth - triggerRect.right - margin,
      bottom: viewportHeight - triggerRect.bottom - margin,
      left: triggerRect.left - margin
    };

    // Determine best position (prioritize bottom, right, left, top)
    if (space.bottom >= contentRect.height || space.bottom >= space.top) {
      // Position below
      content.style.top = `${triggerRect.bottom + margin}px`;
      if (space.right >= contentRect.width) {
        content.style.left = `${triggerRect.left}px`;
      } else if (space.left >= contentRect.width) {
        content.style.right = `${viewportWidth - triggerRect.right}px`;
      } else {
        // Not enough space on either side, center it
        content.style.left = '50%';
        content.style.transform = 'translateX(-50%)';
      }
    } else if (space.right >= contentRect.width) {
      // Position to the right
      content.style.left = `${triggerRect.right + margin}px`;
      if (space.top >= contentRect.height) {
        content.style.top = `${triggerRect.top}px`;
      } else {
        content.style.top = `${triggerRect.bottom - contentRect.height}px`;
      }
    } else if (space.left >= contentRect.width) {
      // Position to the left
      content.style.right = `${viewportWidth - triggerRect.left + margin}px`;
      if (space.top >= contentRect.height) {
        content.style.top = `${triggerRect.top}px`;
      } else {
        content.style.top = `${triggerRect.bottom - contentRect.height}px`;
      }
    } else {
      // Position above (last resort)
      content.style.bottom = `${viewportHeight - triggerRect.top + margin}px`;
      if (space.right >= contentRect.width) {
        content.style.left = `${triggerRect.left}px`;
      } else if (space.left >= contentRect.width) {
        content.style.right = `${viewportWidth - triggerRect.right}px`;
      } else {
        // Not enough space on either side, center it
        content.style.left = '50%';
        content.style.transform = 'translateX(-50%)';
      }
    }
  }

  // Initialize tooltips
  tooltips.forEach(tooltip => {
    const content = document.createElement('div');
    content.className = 'tooltip-content';

    if (tooltip.dataset.tooltipImage) {
      content.style.maxWidth = 'none';
      content.style.width = 'auto';
    }

    if (tooltip.dataset.tooltipContent) {
      content.innerHTML = `<p>${tooltip.dataset.tooltipContent}</p>`;
    } else if (tooltip.dataset.tooltipImage) {
      content.innerHTML = `<img src="${tooltip.dataset.tooltipImage}" alt="Tooltip image">`;
    }

    document.body.appendChild(content);
    tooltip.contentElement = content;

    let isOpen = false;
    let hoverTimeout;

    const showTooltip = () => {
      if (isOpen) return;

      // Hide all other tooltips first
      document.querySelectorAll('.tooltip-content').forEach(t => {
        t.style.opacity = '0';
        t.style.visibility = 'hidden';
      });

      // Position and show this tooltip
      positionTooltip(tooltip, content);
      content.style.opacity = '1';
      content.style.visibility = 'visible';
      isOpen = true;
    };

    const hideTooltip = () => {
      if (!isOpen) return;
      content.style.opacity = '0';
      content.style.visibility = 'hidden';
      isOpen = false;
    };

    const toggleTooltip = () => {
      if (isOpen) {
        hideTooltip();
      } else {
        showTooltip();
      }
    };

    if (isTouchDevice) {
      tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTooltip();
      });
    } else {
      tooltip.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
          showTooltip();
        }, 300);
      });

      tooltip.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        if (isOpen) {
          hideTooltip();
        }
      });

      tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTooltip();
      });
    }

    document.addEventListener('click', (e) => {
      if (!tooltip.contains(e.target) && !content.contains(e.target)) {
        hideTooltip();
      }
    });
  });

  // Handle window resize
  window.addEventListener('resize', () => {
    tooltips.forEach(tooltip => {
      if (tooltip.isOpen) {
        positionTooltip(tooltip, tooltip.contentElement);
      }
    });
  });

  // Accordion functionality
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isActive = header.classList.contains('active');
      accordionHeaders.forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.style.maxHeight = null;
      });
      if (!isActive) {
        header.classList.add('active');
        const content = header.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Form submission
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = {
      symbol: form.symbol.value,
      type: 5,
      open_type: form.open_type.value,
      side: form.side.value,
      vol: form.quantity.value,
      leverage: form.leverage.value,
      take_profit_price: form.take_profit_price.value,
      take_profit_trend: form.take_profit_type.value,
      stop_loss_price: form.stop_loss_price.value,
      stop_loss_trend: form.stop_loss_type.value
    };

    if (!form.quantity.value || !form.token.value) {
      showConsoleMessage('Error: Please fill in all required fields', 'error');
      return;
    }

    if (!/^WEB[0-9a-f]{64}$/i.test(form.token.value)) {
      showConsoleMessage('Invalid token format. Token should start with WEB followed by 64 hexadecimal characters.', 'error');
      return;
    }

    if (!data.take_profit_price || parseFloat(data.take_profit_price) <= 0) {
      data.take_profit_price = null;
      data.take_profit_trend = null;
    }

    if (!data.stop_loss_price || parseFloat(data.stop_loss_price) <= 0) {
      data.stop_loss_price = null;
      data.stop_loss_trend = null;
    }

    showConsoleMessage('Submitting order...', 'loading');
    responseTimeBox.classList.add('hidden');
    const startTime = performance.now();

    try {
      const response = await fetch('https://api.mexc-bypass.xyz/v1/createFuturesOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-MEXC-BYPASS-API-KEY': '65f39f060ece7227f9feb7de71f58d9edbb8d3eb8f5479bf920f0c77d676c1a1',
          'X-MEXC-WEB-KEY': form.token.value,
          'X-MEXC-NETWORK': 'TESTNET'
        },
        body: JSON.stringify(data)
      });

      console.log(response);

      const endTime = performance.now();
      const duration = (endTime - startTime).toFixed(2);
      responseTimeBox.innerHTML = `<i class="ti ti-clock-hour-2"></i> Response Time: ${duration} ms`;
      responseTimeBox.classList.remove('hidden');

      const result = await response.json();

      if (response.ok) {
        showConsoleMessage(JSON.stringify(result, null, 2), 'success');
      } else {
        showConsoleMessage(result.error || 'Unknown error occurred', 'error');
      }
    } catch (err) {
      const endTime = performance.now();
      const duration = (endTime - startTime).toFixed(2);
      responseTimeBox.innerHTML = `<i class="ti ti-clock-hour-2"></i> Response Time: ${duration} ms`;
      responseTimeBox.classList.remove('hidden');

      showConsoleMessage('Network error: ' + err.message, 'error');
    }
  });

  function showConsoleMessage(message, type = 'info') {
    consoleBox.classList.remove('hidden');
    consoleBox.textContent = typeof message === 'string' ? message : JSON.stringify(message, null, 2);
    consoleBox.style.color = '';

    switch (type) {
      case 'error':
        consoleBox.style.color = 'var(--error)';
        break;
      case 'success':
        consoleBox.style.color = 'var(--success)';
        break;
      case 'loading':
        consoleBox.style.color = 'var(--warning)';
        break;
    }
  }
});